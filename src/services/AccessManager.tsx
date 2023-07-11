import * as React from 'react'
import usePermission from '../hooks/usePermission'
import { PermissionName } from './AuthGuard';

export default function AccessManager({permission,children}:{permission: PermissionName, children : React.ReactNode} ) {
    const {isPermission} = usePermission(); 
    //console.log(isPermission(permission))
  return (
    <>
    {
      isPermission(permission) && (children)
    }
    </>
  )
}
