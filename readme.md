# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 22 Jan 2026 01:47:13 GMT with Node.js v24.12.0 (V8 v13.6.233.17-node.37) on runnervmmtnos (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (325%)        | `140`ns (350%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (375%)        | `160`ns (400%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `180`ns (450%)        | `200`ns (500%)                 | `5,555,556`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `381`ns (953%)        | `391`ns (978%)                 | `2,624,672`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `501`ns (1,253%)      | `521`ns (1,303%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `601`ns (1,503%)      | `611`ns (1,528%)               | `1,663,894`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,042`ns (2,605%)    | `1,082`ns (2,705%)             | `959,693`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,744`ns (4,360%)    | `1,784`ns (4,460%)             | `573,394`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `531`ns (100%)        | `601`ns (113%)                 | `1,883,239`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,663`ns (313%)      | `1,813`ns (341%)               | `601,323`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,111`ns (4,917%)   | `27,727`ns (5,222%)            | `38,298`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (235%)        | `150`ns (250%)                 | `7,092,199`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `160`ns (267%)        | `161`ns (268%)                 | `6,250,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `160`ns (267%)        | `160`ns (267%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `190`ns (317%)        | `201`ns (335%)                 | `5,263,158`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `611`ns (1,018%)      | `621`ns (1,035%)               | `1,636,661`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,914`ns (3,190%)    | `1,964`ns (3,273%)             | `522,466`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (325%)        | `140`ns (350%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (325%)        | `131`ns (328%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (350%)        | `141`ns (353%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (1,203%)      | `491`ns (1,228%)               | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,543`ns (3,858%)    | `1,563`ns (3,908%)             | `648,088`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,605`ns (6,513%)    | `2,695`ns (6,738%)             | `383,877`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `221`ns (111%)        | `230`ns (115%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `291`ns (146%)        | `301`ns (151%)                 | `3,436,426`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `110`ns (220%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
