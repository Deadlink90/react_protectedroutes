import { Navigate } from "react-router-dom";

export const Landing = () => <h2>Landing  (public)</h2>;

export const Home = () => {
 

   return (
    <h2>Home  (private)</h2>
   ) 
}

export const Dashboard = () => <h2>Dashboard  (private)</h2>;

export const Analytics = () => <h2>Analytics  (private,permission: 'analize')</h2>;

export const Admin = () => <h2>Admin  (private,permission: 'Admin')</h2>;

