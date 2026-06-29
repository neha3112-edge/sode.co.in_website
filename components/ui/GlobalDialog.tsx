"use client";

import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function GlobalDialog({
    open,
    setOpen,
    children,
}: {
    open: boolean;
    setOpen: (val: boolean) => void;
    children: React.ReactNode;
}) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="p-0 overflow-hidden">

                {/* Accessibility */}
                <VisuallyHidden>
                    <DialogTitle>Modal</DialogTitle>
                </VisuallyHidden>

                <div className="p-6 max-h-[80vh] overflow-y-auto">
                    {children}
                </div>

            </DialogContent>
        </Dialog>
    );
}