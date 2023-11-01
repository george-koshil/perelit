"use client"

interface CabinCareProps {
  fill?: string
  stroke: string
}

const CabinCare: React.FC<CabinCareProps> = ({ fill = "none", stroke = "#D1D2DF" }) => {
  return (
    <svg
      width="60"
      height="61"
      viewBox="0 0 60 61"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.5702 34.1359H24.5791L24.588 34.1358C25.3438 34.1223 26.0849 34.4003 26.6682 34.9281C27.2496 35.4541 27.6337 36.1926 27.7362 37.0074C27.7765 37.4518 27.7283 37.8997 27.595 38.3223C27.4605 38.7491 27.2429 39.1387 26.9585 39.4672C26.6743 39.7955 26.3301 40.0551 25.9496 40.2319C25.5697 40.4085 25.1605 40.4992 24.7481 40.5C24.7477 40.5 24.7473 40.5 24.7469 40.5L21.7467 40.5H20.2792H11.218C11.0091 40.5 10.8006 40.4282 10.6253 40.2876C10.4492 40.1463 10.3154 39.942 10.2538 39.7016C10.2537 39.7015 10.2537 39.7015 10.2537 39.7014L5.84479 22.475C5.64521 21.6535 5.76402 20.7843 6.17045 20.0585C6.577 19.3325 7.23324 18.8162 7.98611 18.6054C8.73764 18.3951 9.53955 18.5015 10.2218 18.9076C10.9044 19.314 11.4186 19.9926 11.6385 20.8071L14.8577 33.3839L15.0502 34.1359H15.8265H24.5702Z"
        stroke={stroke}
        stroke-width="2"
      />
      <path
        d="M4.75 44.5H18.75C19.8546 44.5 20.75 43.6046 20.75 42.5V40.5"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M51.3961 34.1359H51.4046L51.4131 34.1358C52.2235 34.122 53.011 34.4086 53.6246 34.9415C54.2348 35.4715 54.6304 36.2081 54.7358 37.0118C54.7772 37.4503 54.7277 37.8927 54.5903 38.311C54.4515 38.7337 54.2261 39.1223 53.9288 39.452C53.6315 39.7817 53.269 40.0451 52.8645 40.2255C52.4601 40.4059 52.0226 40.4994 51.5802 40.5H48.4549H46.9263H37.4875C37.2495 40.5 37.0179 40.4212 36.8284 40.2754C36.639 40.1295 36.5023 39.9245 36.4402 39.6919C36.4402 39.6919 36.4402 39.6918 36.4401 39.6918L31.8476 22.4655C31.6424 21.6547 31.7636 20.7955 32.1846 20.0738C32.6063 19.3507 33.2947 18.8245 34.0997 18.6082C34.9045 18.3919 35.762 18.5026 36.4864 18.9166C37.2094 19.3297 37.7421 20.0121 37.9685 20.817L41.3218 33.3935L41.5197 34.1359H42.288H51.3961Z"
        stroke={stroke}
        stroke-width="2"
      />
      <path
        d="M31.75 44.5H45.75C46.8546 44.5 47.75 43.6046 47.75 42.5V40.5"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CabinCare;