'use client';

import {Button, TextField} from "@mui/material";
import {useCtvrtekQuery} from "@/app/query/useCtvrtekQuery";
import {useState} from "react";

export default function Home() {
    const [age, setAge] = useState(0);
    const {data} = useCtvrtekQuery(age);

    return (
        <main>
            <div style={{color:'red'}}>Appka bude zítra vypnutá.</div>
            <h1>Web o technickém čtvrtku</h1>
            <div>
                Zadaný věk: {age}
            </div>
            <TextField
                type="number"
                label="Zadej tvůj věk"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
            />
            <Button variant="contained">Tlačítko</Button>
            <div>
                {JSON.stringify(data)}
                <div style={{border: '1px solid black', padding: 16, margin: 16}}>
                    <b>Datum:</b> {String(data?.datum)}<br/>
                    <b>IP:</b> {data?.ip}<br/>
                    <b>Born year:</b> {data?.bornYear}
                </div>
            </div>
        </main>
    )
}
