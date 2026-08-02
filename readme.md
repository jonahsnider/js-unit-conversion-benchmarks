# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 02 Aug 2026 16:26:16 GMT with Node.js v24.18.0 (V8 v13.6.233.17-node.50) on runnervmvrwv9 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (275%)        | `120`ns (300%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (275%)        | `120`ns (300%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (325%)        | `140`ns (350%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (500%)        | `210`ns (525%)                 | `5,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `351`ns (878%)        | `360`ns (900%)                 | `2,849,003`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `521`ns (1,303%)      | `531`ns (1,328%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `631`ns (1,578%)      | `641`ns (1,602%)               | `1,584,786`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,062`ns (2,655%)    | `1,072`ns (2,680%)             | `941,620`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,753`ns (4,383%)    | `1,774`ns (4,435%)             | `570,451`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `581`ns (100%)        | `641`ns (110%)                 | `1,721,170`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,703`ns (293%)      | `1,833`ns (315%)               | `587,199`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,695`ns (4,423%)   | `26,463`ns (4,555%)            | `38,918`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (183%)        | `120`ns (200%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `131`ns (218%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (233%)        | `141`ns (235%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (350%)        | `211`ns (352%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `641`ns (1,068%)      | `651`ns (1,085%)               | `1,560,062`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,924`ns (3,207%)    | `1,974`ns (3,290%)             | `519,751`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (275%)        | `120`ns (300%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `120`ns (300%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `160`ns (400%)        | `161`ns (403%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (1,228%)      | `501`ns (1,253%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,553`ns (3,883%)    | `1,563`ns (3,908%)             | `643,915`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,677`ns (6,693%)    | `2,785`ns (6,963%)             | `373,552`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `201`ns (100%)        | `211`ns (105%)                 | `4,975,124`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (114%)        | `231`ns (115%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `301`ns (150%)        | `310`ns (154%)                 | `3,322,259`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `91`ns (182%)         | `100`ns (200%)                 | `10,989,011`/sec      |

<!-- endblock(results) -->
