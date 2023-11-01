'use client'

import 'react-international-phone/style.css';

import {
  BaseTextFieldProps,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import {
  CountryIso2,
  defaultCountries,
  FlagEmoji,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';
import useMediaQuery from '@/app/hooks/useMediaQuery';
import { useTranslation } from 'react-i18next';

export interface MUIPhoneProps extends BaseTextFieldProps {
  value?: string;
  onChange?: (phone: string) => void;
}

const PhoneInput: React.FC<MUIPhoneProps> = ({
  value,
  onChange,
  ...restProps
}) => {
  const { phone, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: 'ua',
      value,
      countries: defaultCountries,
      onChange: (data: { phone: string; }) => {
        onChange?.(data.phone);
      },
    });

  const isTablet = useMediaQuery("md")
  const { t } = useTranslation();

  return (
    <TextField
      variant="outlined"
      label={t("phone-number")}
      color="primary"
      placeholder={t("phone-number")}
      value={phone}
      onChange={handlePhoneValueChange}
      type="tel"
      inputRef={inputRef}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            style={{ marginRight: '2px', marginLeft: '-8px' }}
          >
            <Select
              MenuProps={{
                style: {
                  height: '300px',
                  width: '360px',
                  top: '10px',
                  left: isTablet ? "-34px" : '-15px',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
              }}
              sx={{
                width: 'max-content',
                fieldset: {
                  display: 'none',
                },
                '&.Mui-focused:has(div[aria-expanded="false"])': {
                  fieldset: {
                    display: 'block',
                  },
                },
                '.MuiSelect-select': {
                  padding: '8px',
                  paddingRight: '24px !important',
                },
                svg: {
                  right: 0,
                },
              }}
              value={country}
              onChange={(e) => setCountry(e.target.value as CountryIso2)}
              renderValue={(value) => (
                <FlagEmoji iso2={value} style={{ display: 'flex' }} />
              )}
            >
              {defaultCountries.map((c: any) => {
                const country = parseCountry(c);
                return (
                  <MenuItem key={country.iso2} value={country.iso2}>
                    <FlagEmoji
                      iso2={country.iso2}
                      style={{ marginRight: '8px' }}
                    />
                    <Typography marginRight="8px">{country.name}</Typography>
                    <Typography color="gray">+{country.dialCode}</Typography>
                  </MenuItem>
                );
              })}
            </Select>
          </InputAdornment>
        ),
      }}
      {...restProps}
    />
  );
};

export default PhoneInput