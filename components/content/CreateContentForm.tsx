"use client";

import { Loader2, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useActionState } from 'react';
import { createContent } from '@/app/(dashboard)/actions';

type ActionState = {
  error?: string;
  success?: string;
};

export function CreateContentForm() {
    const [contentState, contentAction, isContentPending] = useActionState<
        ActionState,
        FormData
    >(createContent, {});


    return (
        <form action={contentAction} className="space-y-4">
            <Input
                name="title"
                type="hidden"
                value="New Content"
            />
            <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                disabled={isContentPending}
            >
                {isContentPending ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Adding...
                    </>
                ) : (
                    <>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add New
                    </>
                )}
            </Button>
        </form>
    );
}