import "@measured/puck/puck.css";
import { Client } from "./client";


export default function Editor() {
    const initialData = {};

    return <Client data={initialData || {}} />
}