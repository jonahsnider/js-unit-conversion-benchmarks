# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 03 Jun 2024 02:19:23 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az1114-714 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `110`ns (100%)        | `130`ns (118%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (283%)        | `351`ns (319%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `430`ns (391%)        | `481`ns (437%)                 | `2,325,581`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `532`ns (484%)        | `592`ns (538%)                 | `1,879,699`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,042`ns (947%)      | `1,122`ns (1,020%)             | `959,693`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,272`ns (1,156%)    | `1,403`ns (1,275%)             | `786,164`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,342`ns (1,220%)    | `1,473`ns (1,339%)             | `745,156`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,565`ns (2,332%)    | `2,725`ns (2,477%)             | `389,864`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,331`ns (3,937%)    | `4,591`ns (4,174%)             | `230,894`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,343`ns (66,675%)  | `74,495`ns (67,723%)           | `13,635`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `932`ns (100%)        | `1,213`ns (130%)               | `1,072,961`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `37,023`ns (3,972%)   | `52,991`ns (5,686%)            | `27,010`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,119`ns (9,133%)   | `158,719`ns (17,030%)          | `11,748`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `141`ns (100%)        | `160`ns (113%)                 | `7,092,199`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `310`ns (220%)        | `340`ns (241%)                 | `3,225,806`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `440`ns (312%)        | `491`ns (348%)                 | `2,272,727`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (405%)        | `631`ns (448%)                 | `1,751,313`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,292`ns (916%)      | `1,423`ns (1,009%)             | `773,994`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,511`ns (3,199%)    | `4,839`ns (3,432%)             | `221,680`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,407`ns (26,530%)  | `38,463`ns (27,279%)           | `26,733`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `151`ns (116%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (255%)        | `421`ns (324%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `480`ns (369%)        | `581`ns (447%)                 | `2,083,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,323`ns (1,018%)    | `1,614`ns (1,242%)             | `755,858`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,723`ns (1,325%)    | `2,355`ns (1,812%)             | `580,383`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,795`ns (5,227%)    | `8,719`ns (6,707%)             | `147,167`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,935`ns (61,488%)  | `82,431`ns (63,408%)           | `12,510`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `501`ns (100%)        | `561`ns (112%)                 | `1,996,008`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `531`ns (106%)        | `591`ns (118%)                 | `1,883,239`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `631`ns (126%)        | `702`ns (140%)                 | `1,584,786`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `240`ns (100%)        | `261`ns (109%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `551`ns (230%)        | `611`ns (255%)                 | `1,814,882`/sec       |

<!-- endblock(results) -->
