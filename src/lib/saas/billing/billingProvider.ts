import type { PlanTier, Subscription } from '../../../types/saas';

export interface CheckoutSessionResult {
  sessionId: string;
  checkoutUrl: string;
}

export interface CustomerPortalResult {
  portalUrl: string;
}

export interface WebhookResult {
  eventType: string;
  processed: boolean;
  subscription?: Partial<Subscription>;
}

/**
 * Provider-Agnostic Billing Interface
 * Allows swapping between Stripe, Lemon Squeezy, Paddle, or Razorpay
 * without touching core application logic or UI components.
 */
export interface IBillingProvider {
  createCheckoutSession(
    userId: string,
    userEmail: string,
    planTier: PlanTier,
    interval: 'monthly' | 'yearly',
    successUrl: string,
    cancelUrl: string
  ): Promise<CheckoutSessionResult>;

  createCustomerPortalSession(
    providerCustomerId: string,
    returnUrl: string
  ): Promise<CustomerPortalResult>;

  getSubscription(providerSubscriptionId: string): Promise<Subscription | null>;

  cancelSubscription(providerSubscriptionId: string): Promise<boolean>;

  handleWebhook(payload: string, signature: string): Promise<WebhookResult>;
}

/**
 * Placeholder billing provider until a specific merchant of record is selected.
 */
export class BillingProviderPlaceholder implements IBillingProvider {
  async createCheckoutSession(): Promise<CheckoutSessionResult> {
    throw new Error('Billing provider not yet connected. Configure payment provider keys.');
  }

  async createCustomerPortalSession(): Promise<CustomerPortalResult> {
    throw new Error('Billing provider not yet connected. Configure payment provider keys.');
  }

  async getSubscription(): Promise<Subscription | null> {
    return null;
  }

  async cancelSubscription(): Promise<boolean> {
    return true;
  }

  async handleWebhook(): Promise<WebhookResult> {
    return { eventType: 'unknown', processed: false };
  }
}
