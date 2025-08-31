import { ReactNode } from "react";

export default function Layout(
    { children }: {
        children: ReactNode
    }
) {
    return (
        <div>
            <div>Header</div>
            {children}
            <div>Footer</div>
        </div>
    );
}