import { ArrowRightIcon, ZapIcon } from 'lucide-react';

export default function Banner() {
    return (
        <div className='flex w-full flex-wrap items-center justify-center gap-3 bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground'>
            <div className='flex items-center gap-2'>
                <ZapIcon className='size-3.5 shrink-0' />
                <span>Enterprise livestock management — completely free to start.</span>
            </div>
            <a
                href='https://livestock-mangement-system.vercel.app/'
                className='flex items-center gap-1 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold text-primary-foreground ring-1 ring-primary-foreground/20 transition hover:bg-primary-foreground/25 active:scale-95'
            >
                Get started free
                <ArrowRightIcon className='size-3' />
            </a>
        </div>
    );
}