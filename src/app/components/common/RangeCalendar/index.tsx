"use client";

import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { Dayjs } from "dayjs";
import { styled } from "@mui/material/styles";
import {
  DateRangePickerDay as MuiDateRangePickerDay,
  DateRangePickerDayProps,
} from "@mui/x-date-pickers-pro/DateRangePickerDay";
import { ukUA } from "@mui/x-date-pickers/locales";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#009CDC",
      },
    },
  },
  ukUA
);

const DateRangePickerDay = styled(MuiDateRangePickerDay)(
  ({
    theme,
    isHighlighting,
    isStartOfHighlighting,
    isEndOfHighlighting,
    isEndOfPreviewing,
    selected,
    isPreviewing,
    isStartOfPreviewing,
  }) => ({
    "&:hover": {
      "& button": {
        borderRadius: "8px !important",
      },
    },
    "&:last-of-type": {
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "0px",
    },
    "&:first-of-type": {
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
    },
    "& .Mui-selected": {
      background: "#009CDC !important",
    },
    "& button": {
      borderRadius: 8,
      "&:hover": {
        background: "#009CDC",
        color: "white",
        border: "none !important",
      },
    },
    ...(selected && {
      "& button": {
        background: "#009CDC !important",
      },
      "& button:hover, &:focus": {
        background: "#009CDC !important",
      },
    }),
    ...(isPreviewing && {
      "& button": {
        border: "none !important",
        background: "#EFEFF5",
        borderRadius: 0,
      },
    }),
    ...(isHighlighting && {
      borderRadius: 0,
      backgroundColor: "#EFEFF5",
      "&:hover, &:focus": {
        backgroundColor: "#EFEFF5",
      },
    }),
    ...(isStartOfHighlighting && {
      borderTopLeftRadius: "8px !important",
      borderBottomLeftRadius: "8px !important",
      backgroundColor: "#009CDC",
    }),
    ...(isEndOfHighlighting && {
      borderTopRightRadius: "8px !important",
      borderBottomRightRadius: "8px !important",
      backgroundColor: "#009CDC",
    }),
    ...(isEndOfPreviewing && {
      "& button": {
        color: "white",
        borderColor: "transparent !important",
      },
      "& > div": {
        borderColor: "transparent !important",
      },
      backgroundColor: "#009CDC",
      borderRadius: "8px",
    }),
    ...(isStartOfPreviewing && {
      "& button": {
        color: "white",
        borderColor: "transparent !important",
      },
      "& > div": {
        borderColor: "transparent !important",
      },
      backgroundColor: "#009CDC",
      borderRadius: "8px",
    }),
  })
) as React.ComponentType<DateRangePickerDayProps<Dayjs>>;

export default function RangeCalendar(props: { isTablet: boolean, onChange: (value: string) => void }) {
  const calendarRef = React.useRef<HTMLDivElement>(null);
  const { isTablet } = props

  React.useEffect(function hideLicenseMark() {
    if (calendarRef && calendarRef.current) {
      const allElements = calendarRef.current.getElementsByTagName("*");

      for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i] as any;
        if (element.textContent?.includes("MUI X Missing license key")) {
          element.style.display = "none";
        }
      }
    }
  }, []);


  const handleChange = (date: any) => {
    props.onChange(date?.[0]?.$d?.toString() ?? "")
  }

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={
        ukUA.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <DateRangeCalendar
        ref={calendarRef}
        onChange={handleChange}
        slots={{ day: DateRangePickerDay }}
        dayOfWeekFormatter={(day) => day}
        disablePast
        calendars={isTablet ? 2 : 1}
        sx={{
          "& .css-jef1b6-MuiDateRangeCalendar-container": {
            border: "none !important",
          },
          "& .MuiTypography-subtitle1, .MuiPickersCalendarHeader-label": {
            color: "#009CDC",
          },
          "& .MuiSvgIcon-root": {
            color: "#009CDC",
          },
        }}
      />
    </LocalizationProvider>
  );
}
