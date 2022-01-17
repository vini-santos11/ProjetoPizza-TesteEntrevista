import { User } from "src/app/shared/models/user";


export function hasPermission(url: string): boolean {
  const user: User = JSON.parse(localStorage.getItem('user')!) as User;
  var isNumericExp = new RegExp("^[0-9]+$");
  var paths = url.split("/").map(path => {
    if(path.match(isNumericExp))
      return ':id'
    return path;
  })
  var completePath = paths.join("/");
  return user.rotas.includes(completePath);
}
