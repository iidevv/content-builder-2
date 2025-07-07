'use client';

import type { Data } from '@measured/puck'
import { Puck } from "@measured/puck";
import config from "../puck.config";
import { useState } from 'react';

export function Client({ data }: { data: Partial<Data> }) {
    const [isSaving, setIsSaving] = useState(false)

    const save = async (data: Data) => {

        setIsSaving(true)

        // Save the data to the database

        setIsSaving(false)
    }

    return <Puck config={config} data={data} onPublish={save} />;
}