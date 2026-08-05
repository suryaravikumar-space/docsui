import { PinTable } from "@/components/mdx/pin-table";

export function PinTableDefault() {
  return (
    <PinTable
      title="6-pin serial and SPI header"
      connector="J2"
      rows={[
        {
          pin: 1,
          signal: "3.3V",
          type: "POWER",
          voltage: "3.3V",
          description: "Power supply",
        },
        { pin: 2, signal: "GND", type: "GND", description: "Ground" },
        {
          pin: 3,
          signal: "UART_TX",
          type: "OUTPUT",
          voltage: "3.3V",
          altFunction: "UART1_TX",
          description: "Serial transmit",
        },
        {
          pin: 4,
          signal: "UART_RX",
          type: "INPUT",
          voltage: "3.3V",
          altFunction: "UART1_RX",
          description: "Serial receive",
        },
        {
          pin: 5,
          signal: "SPI_SCK",
          type: "BIDIR",
          voltage: "3.3V",
          altFunction: "SPI0_SCK",
          description: "SPI clock",
        },
        {
          pin: 6,
          signal: "SPI_CS",
          type: "OUTPUT",
          voltage: "3.3V",
          altFunction: "SPI0_CS",
          description: "SPI chip select",
        },
      ]}
      caption="Compact serial and SPI header pin assignment"
    />
  );
}

export default PinTableDefault;
