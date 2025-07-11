'use client';

import type { Data } from '@measured/puck'
import { Puck } from "@measured/puck";
import config from "../puck.config";
import { useState } from 'react';
import { useRouter } from 'next/router';

export function Client({ id, data }: { id: string; data: Partial<Data> }) {
    const router = useRouter()

    const [isSaving, setIsSaving] = useState(false)

    const close = () => {
        router.push(`/dashboard/content`)
    }

    const save = async (data: Data) => {

        setIsSaving(true)

        // Save the data to the database

        setIsSaving(false)
    }

    return <Puck config={config} data={data} onPublish={save} />;
}