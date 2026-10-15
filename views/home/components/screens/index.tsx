import type { ScreenKind } from '@/types'
import { DashboardScreen } from './DashboardScreen'
import { NotificationScreen } from './NotificationScreen'
import { PaletteScreen } from './PaletteScreen'
import { PaymentScreen } from './PaymentScreen'
import { ProductScreen } from './ProductScreen'

const SCREENS: Record<ScreenKind, () => React.JSX.Element> = {
    dashboard: DashboardScreen,
    product: ProductScreen,
    notification: NotificationScreen,
    palette: PaletteScreen,
    payment: PaymentScreen,
}

export function Screen({ kind }: { kind: ScreenKind }) {
    const Component = SCREENS[kind]

    return <Component />
}
