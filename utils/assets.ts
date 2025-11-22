export type productType ={
    id : string | number;
    name: string;
    shortDescription : string;
    description : string;
    price : number;
    sizes : string[];
    colors : string[];
    images : Record<string,string>
}

export type productsType = productType[]




  

export interface NavItem {
    name : string;
    path : string
}



export const NavItems : NavItem[] = [
{name: "home",path:"/"},
{name: "shopping", path:"/shopping"},
{name: "mens", path: "/mens"},
{name: "womens", path: "/womens"}
]