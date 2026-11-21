export default function Filters() {
    return (
        <svg width="0" height="0" style={{position: "absolute"}} aria-hidden="true">
            <defs>
                <filter id="wobble" x="-5%" y="-5%" width="110%" height="110%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="6"xChannelSelector="R" yChannelSelector="G"/>
                </filter>

                <filter id="crayon" x="-5%" y="-5%" width="110%" height="110%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="wobbleNoise"/>
                    <feDisplacementMap in="SourceGraphic" in2="wobbleNoise" scale="6" result="wobbled"/>
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="grain"/>
                    <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 0 0 0 -0.5" result="grainMask"/>
                    <feComposite in="wobbled" in2="grainMask" operator="in"/>
                </filter>

            </defs>
        </svg>
    );
}