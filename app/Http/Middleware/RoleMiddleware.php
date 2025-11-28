<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (!auth()->check()) {
            return redirect()->route('login');
        }

        $user = auth()->user();
        
        if ($role === 'super_admin' && !$user->isSuperAdmin()) {
            abort(403, 'Akses ditolak. Hanya Super Admin yang dapat mengakses halaman ini.');
        }
        
        if ($role === 'admin_organisasi' && !$user->isAdminOrganisasi()) {
            abort(403, 'Akses ditolak. Hanya Admin Organisasi yang dapat mengakses halaman ini.');
        }
        
        if ($role === 'admin' && !$user->isSuperAdmin() && !$user->isAdminOrganisasi()) {
            abort(403, 'Akses ditolak. Hanya Admin yang dapat mengakses halaman ini.');
        }

        return $next($request);
    }
}
