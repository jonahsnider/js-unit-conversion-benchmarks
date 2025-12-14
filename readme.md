# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 14 Dec 2025 05:50:52 GMT with Node.js v24.11.1 (V8 v13.6.233.10-node.28) on runnervm6qbrg (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `100`ns (250%)        | `110`ns (275%)                 | `10,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (250%)        | `100`ns (250%)                 | `10,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (275%)        | `111`ns (278%)                 | `9,090,909`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (503%)        | `210`ns (525%)                 | `4,975,124`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `351`ns (878%)        | `361`ns (903%)                 | `2,849,003`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `510`ns (1,275%)      | `511`ns (1,278%)               | `1,960,784`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `631`ns (1,578%)      | `641`ns (1,602%)               | `1,584,786`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,082`ns (2,705%)    | `1,102`ns (2,755%)             | `924,214`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,723`ns (4,308%)    | `1,743`ns (4,358%)             | `580,383`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `591`ns (100%)        | `651`ns (110%)                 | `1,692,047`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,743`ns (295%)      | `1,873`ns (317%)               | `573,723`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,031`ns (4,405%)   | `27,423`ns (4,640%)            | `38,416`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (350%)        | `140`ns (350%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (350%)        | `141`ns (353%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (350%)        | `141`ns (353%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `190`ns (475%)        | `200`ns (500%)                 | `5,263,158`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `601`ns (1,503%)      | `601`ns (1,503%)               | `1,663,894`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,884`ns (4,710%)    | `1,934`ns (4,835%)             | `530,786`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `49`ns (123%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (325%)        | `131`ns (328%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (375%)        | `151`ns (378%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `461`ns (1,153%)      | `471`ns (1,178%)               | `2,169,197`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,533`ns (3,833%)    | `1,543`ns (3,858%)             | `652,316`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,685`ns (6,713%)    | `2,755`ns (6,888%)             | `372,439`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `211`ns (100%)        | `230`ns (109%)                 | `4,739,336`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (109%)        | `231`ns (109%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `310`ns (147%)        | `311`ns (147%)                 | `3,225,806`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `49`ns (100%)         | `50`ns (102%)                  | `20,408,163`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (184%)         | `91`ns (186%)                  | `11,111,111`/sec      |

<!-- endblock(results) -->
