# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 17 Apr 2026 05:46:23 GMT with Node.js v24.14.1 (V8 v13.6.233.17-node.44) on runnervm35a4x (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (275%)        | `120`ns (300%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (278%)        | `120`ns (300%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (500%)        | `201`ns (503%)                 | `5,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `360`ns (900%)        | `361`ns (903%)                 | `2,777,778`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `531`ns (1,328%)      | `541`ns (1,353%)               | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `651`ns (1,627%)      | `652`ns (1,630%)               | `1,536,098`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,051`ns (2,628%)    | `1,062`ns (2,655%)             | `951,475`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,733`ns (4,333%)    | `1,754`ns (4,385%)             | `577,034`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `481`ns (100%)        | `551`ns (115%)                 | `2,079,002`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,844`ns (383%)      | `1,983`ns (412%)               | `542,299`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,487`ns (5,299%)   | `26,303`ns (5,468%)            | `39,236`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `130`ns (217%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (200%)        | `130`ns (217%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (250%)        | `160`ns (267%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (350%)        | `211`ns (352%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `622`ns (1,037%)      | `641`ns (1,068%)               | `1,607,717`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,913`ns (3,188%)    | `1,953`ns (3,255%)             | `522,739`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `120`ns (300%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (350%)        | `141`ns (353%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (1,203%)      | `491`ns (1,228%)               | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,533`ns (3,833%)    | `1,543`ns (3,858%)             | `652,316`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,685`ns (6,713%)    | `2,757`ns (6,893%)             | `372,439`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `211`ns (100%)        | `220`ns (104%)                 | `4,739,336`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (109%)        | `241`ns (114%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `301`ns (143%)        | `310`ns (147%)                 | `3,322,259`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `61`ns (122%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `110`ns (220%)        | `160`ns (320%)                 | `9,090,909`/sec       |

<!-- endblock(results) -->
