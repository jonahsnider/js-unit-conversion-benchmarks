# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 03 Feb 2026 17:47:34 GMT with Node.js v24.13.0 (V8 v13.6.233.17-node.37) on runnervmkj6or (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (275%)        | `111`ns (278%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (350%)        | `141`ns (353%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (503%)        | `210`ns (525%)                 | `4,975,124`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `361`ns (903%)        | `371`ns (928%)                 | `2,770,083`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `501`ns (1,253%)      | `511`ns (1,278%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `611`ns (1,528%)      | `612`ns (1,530%)               | `1,636,661`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,132`ns (2,830%)    | `1,142`ns (2,855%)             | `883,392`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,713`ns (4,283%)    | `1,733`ns (4,333%)             | `583,771`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `501`ns (100%)        | `561`ns (112%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,593`ns (318%)      | `1,723`ns (344%)               | `627,746`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,407`ns (5,071%)   | `26,559`ns (5,301%)            | `39,359`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `61`ns (102%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (183%)        | `110`ns (183%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (202%)        | `130`ns (217%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `161`ns (268%)        | `170`ns (283%)                 | `6,211,180`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (350%)        | `211`ns (352%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `630`ns (1,050%)      | `631`ns (1,052%)               | `1,587,302`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,873`ns (3,122%)    | `1,913`ns (3,188%)             | `533,903`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `120`ns (300%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (350%)        | `141`ns (353%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `461`ns (1,153%)      | `471`ns (1,178%)               | `2,169,197`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,512`ns (3,780%)    | `1,523`ns (3,808%)             | `661,376`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,675`ns (6,688%)    | `2,745`ns (6,863%)             | `373,832`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `191`ns (100%)        | `200`ns (105%)                 | `5,235,602`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (121%)        | `240`ns (126%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `291`ns (152%)        | `301`ns (158%)                 | `3,436,426`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `70`ns (140%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `161`ns (322%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
