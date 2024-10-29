# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 29 Oct 2024 20:08:55 GMT with Node.js v20.18.0 (V8 v11.3.244.8-node.23) on fv-az888-268 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `170`ns (340%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `170`ns (340%)        | `180`ns (360%)                 | `5,882,353`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (460%)        | `250`ns (500%)                 | `4,347,826`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `472`ns (944%)        | `491`ns (982%)                 | `2,118,644`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `521`ns (1,042%)      | `541`ns (1,082%)               | `1,919,386`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `641`ns (1,282%)      | `661`ns (1,322%)               | `1,560,062`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,183`ns (2,366%)    | `1,232`ns (2,464%)             | `845,309`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,195`ns (4,390%)    | `2,225`ns (4,450%)             | `455,581`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,815`ns (69,630%)  | `34,975`ns (69,950%)           | `28,723`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `781`ns (100%)        | `842`ns (108%)                 | `1,280,410`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,631`ns (3,794%)   | `30,527`ns (3,909%)            | `33,748`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75,775`ns (9,702%)   | `76,287`ns (9,768%)            | `13,197`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (202%)        | `140`ns (233%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (250%)        | `150`ns (250%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `221`ns (368%)        | `231`ns (385%)                 | `4,524,887`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (802%)        | `491`ns (818%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,155`ns (3,592%)    | `2,165`ns (3,608%)             | `464,037`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `17,567`ns (29,278%)  | `17,647`ns (29,412%)           | `56,925`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (242%)        | `131`ns (262%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (982%)        | `521`ns (1,042%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,213`ns (2,426%)    | `1,232`ns (2,464%)             | `824,402`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,035`ns (6,070%)    | `3,057`ns (6,114%)             | `329,489`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,983`ns (75,966%)  | `38,111`ns (76,222%)           | `26,328`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `210`ns (100%)        | `211`ns (100%)                 | `4,761,905`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (110%)        | `240`ns (114%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `290`ns (138%)        | `291`ns (139%)                 | `3,448,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
