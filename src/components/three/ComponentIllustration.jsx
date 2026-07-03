// src/components/three/ComponentIllustration.jsx
import React from 'react'

const IMAGE_MAP = {
    core:                '/images/terasReaktor.svg',
    pool:                '/images/kolamReaktor.svg',
    rod_safety:          '/images/batangKendali.svg',
    rod_shim:            '/images/batangKendali.svg',
    rod_regulating:      '/images/batangKendali.svg',
    pc_operator:         '/images/monitorKontrol.svg',
    control_panel_room:  '/images/panelKontrol.svg',
}

export default function ComponentIllustration({ componentId, color }) {
    const src = IMAGE_MAP[componentId]
    if (!src) return null
    return (
        <div style={{
            width: '100%',
            aspectRatio: '16 / 10',
            borderRadius: 6,
            overflow: 'hidden',
            border: `1px solid ${color}33`,
        }}>
            <img
                src={src}
                alt={componentId}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                }}
            />
        </div>
    )
}
