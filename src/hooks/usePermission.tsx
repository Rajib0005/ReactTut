import { ICredential } from "../interfaces/ICredentials"
import { Permission, PermissionName } from "../services/AuthGuard"

const usePermission = () => {
    const userDetails: ICredential = JSON.parse(localStorage.getItem('user') ?? '') 
    const isPermission = (permissionName: PermissionName) => {
        return Permission[permissionName].includes(userDetails.role)
    }
    return { isPermission }
}
export default usePermission;