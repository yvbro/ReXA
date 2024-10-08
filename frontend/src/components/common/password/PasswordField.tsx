/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';

import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

interface PasswordFieldProps {
    value: string;
    label: string;
    error: string;
    testId: string;
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function PasswordField({
    value,
    label,
    error,
    testId,
    onChange,
    className = '',
}: PasswordFieldProps) {
    const [showPassword, setShowPassword] = useState(false);

    const input = {
        form: {
            autoComplete: 'off',
        },
        'data-testid': testId,
    };

    return (
        <TextField
            required
            label={label}
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            value={value}
            error={!!error}
            helperText={error}
            onChange={onChange}
            className={className}
            inputProps={input}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={() => setShowPassword(!showPassword)}
                            data-testid="visibilityButton"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default PasswordField;
