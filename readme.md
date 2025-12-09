# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 09 Dec 2025 03:09:26 GMT with Node.js v24.11.1 (V8 v13.6.233.10-node.28) on runnervmoqczp (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (328%)        | `140`ns (350%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (503%)        | `210`ns (525%)                 | `4,975,124`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `361`ns (903%)        | `371`ns (928%)                 | `2,770,083`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `511`ns (1,278%)      | `521`ns (1,303%)               | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `641`ns (1,602%)      | `651`ns (1,627%)               | `1,560,062`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,052`ns (2,630%)    | `1,072`ns (2,680%)             | `950,570`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,734`ns (4,335%)    | `1,763`ns (4,408%)             | `576,701`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `531`ns (100%)        | `611`ns (115%)                 | `1,883,239`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,674`ns (315%)      | `1,833`ns (345%)               | `597,372`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,823`ns (4,863%)   | `27,391`ns (5,158%)            | `38,725`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `60`ns (150%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (303%)        | `130`ns (325%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (350%)        | `140`ns (350%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (500%)        | `210`ns (525%)                 | `5,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `611`ns (1,528%)      | `612`ns (1,530%)               | `1,636,661`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,904`ns (4,760%)    | `1,964`ns (4,910%)             | `525,210`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `49`ns (123%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `111`ns (278%)        | `120`ns (300%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (325%)        | `131`ns (328%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `131`ns (328%)        | `140`ns (350%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `451`ns (1,128%)      | `490`ns (1,225%)               | `2,217,295`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,533`ns (3,833%)    | `1,552`ns (3,880%)             | `652,316`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,665`ns (6,663%)    | `2,725`ns (6,813%)             | `375,235`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `191`ns (100%)        | `200`ns (105%)                 | `5,235,602`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (121%)        | `241`ns (126%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `281`ns (147%)        | `291`ns (152%)                 | `3,558,719`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (220%)         | `90`ns (220%)                  | `11,111,111`/sec      |

<!-- endblock(results) -->
