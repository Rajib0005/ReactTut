import * as React from 'react'
import usePermission from '../hooks/usePermission'
import { PermissionName } from './AuthGuard';

type RenderProps = {
  permission : PermissionName
  children : React.ReactNode | ((hasAccess:boolean)=> JSX.Element)
}

//access management by rendering props 
export default function AccessManager({permission,children}: RenderProps ) {
    const {isPermission} = usePermission(); 
    if(typeof children === 'function') return children(isPermission(permission))
  return (
    <>
    {
      //if permission is valid it would render as a component and also as callback function
      isPermission(permission) && (children)
    }
    </>
  )
}
