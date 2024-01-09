# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 09 Jan 2024 10:05:10 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az573-296 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `190`ns (100%)        | `231`ns (122%)                 | `5,263,158`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (196%)        | `491`ns (258%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `531`ns (279%)        | `641`ns (337%)                 | `1,883,239`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `602`ns (317%)        | `732`ns (385%)                 | `1,661,130`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,042`ns (548%)      | `1,263`ns (665%)               | `959,693`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,302`ns (685%)      | `1,724`ns (907%)               | `768,049`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,313`ns (691%)      | `1,643`ns (865%)               | `761,615`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,445`ns (1,287%)    | `3,007`ns (1,583%)             | `408,998`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,399`ns (2,315%)    | `5,691`ns (2,995%)             | `227,324`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,103`ns (4,791%)    | `9,783`ns (5,149%)             | `109,854`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `821`ns (100%)        | `951`ns (116%)                 | `1,218,027`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,951`ns (3,892%)   | `38,783`ns (4,724%)            | `31,298`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,391`ns (4,798%)   | `39,967`ns (4,868%)            | `25,387`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `210`ns (110%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (179%)        | `392`ns (205%)                 | `2,923,977`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (241%)        | `531`ns (278%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `572`ns (299%)        | `652`ns (341%)                 | `1,748,252`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,244`ns (651%)      | `1,402`ns (734%)               | `803,859`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,282`ns (671%)      | `1,504`ns (787%)               | `780,031`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,439`ns (2,324%)    | `5,051`ns (2,645%)             | `225,276`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `220`ns (100%)        | `251`ns (114%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `411`ns (187%)        | `471`ns (214%)                 | `2,433,090`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `492`ns (224%)        | `582`ns (265%)                 | `2,032,520`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,423`ns (647%)      | `1,543`ns (701%)               | `702,741`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,823`ns (829%)      | `2,095`ns (952%)               | `548,546`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,815`ns (2,643%)    | `6,111`ns (2,778%)             | `171,969`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,643`ns (3,020%)    | `7,127`ns (3,240%)             | `150,534`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `561`ns (100%)        | `641`ns (114%)                 | `1,782,531`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `592`ns (106%)        | `662`ns (118%)                 | `1,689,189`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `652`ns (116%)        | `743`ns (132%)                 | `1,533,742`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `301`ns (100%)        | `331`ns (110%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `522`ns (173%)        | `582`ns (193%)                 | `1,915,709`/sec       |

<!-- endblock(results) -->
