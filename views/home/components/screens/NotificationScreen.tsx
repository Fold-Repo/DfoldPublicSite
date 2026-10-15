import { HOME } from '@/data'

export function NotificationScreen() {
    const { appInitial, app, title, body, followUp } = HOME.mockups.notification

    return (
        <div className="w-72 space-y-2">
            <div className="rounded-2xl bg-white/95 p-3.5 text-[#0b1220] shadow-float backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[11px] text-[#5b6475]">
                    <span className="grid size-5 place-items-center rounded-md bg-[#1d4ed8] text-[10px] font-medium text-white">{appInitial}</span>

                    {app}
                </div>

                <p className="mt-2 text-sm font-medium">{title}</p>

                <p className="text-xs text-[#5b6475]">{body}</p>
            </div>

            <div className="ml-6 rounded-2xl bg-white/85 p-3 text-[#0b1220] shadow-card backdrop-blur-sm">
                <p className="text-xs font-medium">{followUp}</p>
            </div>
        </div>
    )
}
