import { Navigate, Outlet} from 'react-router-dom'
import usePermission from '../hooks/usePermission';
import { Roles } from '../interfaces/ICredentials';


export const Permission = {
  "user.home": [Roles.Admin, Roles.User],
  "user.dashboard": [Roles.Admin],
  "user.about": [Roles.User, Roles.Admin],
  "user.todos" : [Roles.Admin]
}

export type PermissionName = keyof typeof Permission;

export default function AuthGuard({permission}: {permission:PermissionName}) {
  const { isPermission } = usePermission();
  if (!isPermission(permission)) return <Navigate to = '/home' />
  return (
    <>
      <Outlet />
    </>
  )

}
