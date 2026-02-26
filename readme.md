# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 26 Feb 2026 06:07:28 GMT with Node.js v24.13.1 (V8 v13.6.233.17-node.40) on runnervmnay03 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `120`ns (300%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (303%)        | `130`ns (325%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (350%)        | `141`ns (353%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (500%)        | `201`ns (503%)                 | `5,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `341`ns (853%)        | `351`ns (878%)                 | `2,932,551`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `500`ns (1,250%)      | `501`ns (1,253%)               | `2,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `611`ns (1,528%)      | `621`ns (1,553%)               | `1,636,661`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,062`ns (2,655%)    | `1,072`ns (2,680%)             | `941,620`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,744`ns (4,360%)    | `1,773`ns (4,433%)             | `573,394`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `561`ns (100%)        | `612`ns (109%)                 | `1,782,531`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,633`ns (291%)      | `1,793`ns (320%)               | `612,370`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,199`ns (4,492%)   | `25,983`ns (4,632%)            | `39,684`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `121`ns (202%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `131`ns (218%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (250%)        | `151`ns (252%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (367%)        | `230`ns (383%)                 | `4,545,455`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `611`ns (1,018%)      | `622`ns (1,037%)               | `1,636,661`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,884`ns (3,140%)    | `1,934`ns (3,223%)             | `530,786`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (325%)        | `130`ns (325%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (350%)        | `140`ns (350%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (1,203%)      | `491`ns (1,228%)               | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,493`ns (3,733%)    | `1,503`ns (3,758%)             | `669,792`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,745`ns (6,863%)    | `2,805`ns (7,013%)             | `364,299`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `190`ns (100%)        | `191`ns (101%)                 | `5,263,158`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (121%)        | `231`ns (122%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `281`ns (148%)        | `291`ns (153%)                 | `3,558,719`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
