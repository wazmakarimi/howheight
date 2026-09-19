import type { User } from '../../../types/saas';

export interface AuthSession {
  user: User;
  token: string;
  expiresAt: string;
}

export interface IAuthProvider {
  getSession(request: Request): Promise<AuthSession | null>;
  validateToken(token: string): Promise<User | null>;
  createSession?(userId: string): Promise<AuthSession>;
  revokeSession?(token: string): Promise<void>;
}

/**
 * Derives the authenticated user from the server-side request context.
 * In production Cloudflare Workers / SSR, this validates JWTs or session cookies.
 * NEVER trusts client-supplied userId from the request body or parameters.
 */
export async function getAuthUser(
  request: Request,
  authProvider?: IAuthProvider
): Promise<User | null> {
  if (!authProvider) {
    // Check for standard authorization header or session cookie
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }
    // Placeholder until Cloudflare D1 / Auth provider is connected
    return null;
  }

  const session = await authProvider.getSession(request);
  return session ? session.user : null;
}

/**
 * Guard utility for protected API endpoints or server routes.
 * Throws or returns 401 if unauthenticated.
 */
export async function requireAuth(
  request: Request,
  authProvider?: IAuthProvider
): Promise<User> {
  const user = await getAuthUser(request, authProvider);
  if (!user) {
    throw new Response(
      JSON.stringify({
        error: 'Unauthorized',
        message: 'Authentication required to access this resource.',
      }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }
  return user;
}
