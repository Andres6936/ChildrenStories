import type React from "react";
import { ToggleGroup } from "radix-ui";
import styles from "@/components/ui/toggle-group.module.css";

function Root(props: React.ComponentPropsWithoutRef<typeof ToggleGroup.Root>) {
    return (
        <ToggleGroup.Root
            {...props}
            className={styles.Group}
        />
    )
}

function Item(props: React.ComponentPropsWithoutRef<typeof ToggleGroup.Item>) {
    return (
        <ToggleGroup.Item
            {...props}
            className={styles.Item}
        />
    )
}

export {
    Root,
    Item,
}