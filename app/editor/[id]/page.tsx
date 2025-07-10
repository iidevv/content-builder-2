import "@measured/puck/puck.css";
import { Client } from "./client";


export default function Editor({ params }: { params: { id: string } }) {
    

    return <Client data={initialData || {}} />
}