# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 27 May 2025 23:56:23 GMT with Node.js v22.15.0 (V8 v12.4.254.21-node.24) on fv-az791-497 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (220%)        | `110`ns (220%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `150`ns (300%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `221`ns (442%)        | `250`ns (500%)                 | `4,524,887`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `401`ns (802%)        | `411`ns (822%)                 | `2,493,766`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `501`ns (1,002%)      | `501`ns (1,002%)               | `1,996,008`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `561`ns (1,122%)      | `581`ns (1,162%)               | `1,782,531`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,052`ns (2,104%)    | `1,073`ns (2,146%)             | `950,570`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,993`ns (3,986%)    | `2,013`ns (4,026%)             | `501,756`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `561`ns (100%)        | `621`ns (111%)                 | `1,782,531`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,232`ns (220%)      | `1,343`ns (239%)               | `811,688`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,951`ns (4,626%)   | `27,855`ns (4,965%)            | `38,534`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `61`ns (102%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (167%)        | `101`ns (168%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (185%)        | `120`ns (200%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `111`ns (185%)        | `120`ns (200%)                 | `9,009,009`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (350%)        | `220`ns (367%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `451`ns (752%)        | `461`ns (768%)                 | `2,217,295`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,105`ns (3,508%)    | `2,133`ns (3,555%)             | `475,059`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (962%)        | `501`ns (1,002%)               | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,132`ns (2,264%)    | `1,142`ns (2,284%)             | `883,392`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,895`ns (5,790%)    | `2,925`ns (5,850%)             | `345,423`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `210`ns (105%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (115%)        | `231`ns (116%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (140%)        | `281`ns (141%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `110`ns (220%)        | `111`ns (222%)                 | `9,090,909`/sec       |

<!-- endblock(results) -->
