import React, { useState } from 'react';
import '../../../style/PaymentPlanBtn.css';

function PaymentPlanBtn({ isSelected, title, subtitle, isDisabled }) {
    return (
        <div style={{ 
                backgroundColor: isSelected ? '#4A4A4A' : 'transparent',
                color: isDisabled ? 'rgba(238, 238, 238, 0.3)' : 'unset',
                borderStyle: isDisabled ? 'none' : 'solid'
            }} className="col payment-plan-btn">
            <div>
                <p style={{ 
                    color: isDisabled ? 'rgba(238, 238, 238, 0.3)' : 'unset'
                }}  className="payment-plan">{title}</p>
                {
                    subtitle && <p className="payment-discount">{subtitle}</p>
                }
            </div>
        </div>
    );
}

export default PaymentPlanBtn;