# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 29 Apr 2024 04:40:21 GMT with Node.js v18.20.2 (V8 v10.2.154.26-node.36) on fv-az568-6 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `130`ns (108%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (259%)        | `341`ns (284%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (376%)        | `510`ns (425%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `591`ns (493%)        | `671`ns (559%)                 | `1,692,047`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,112`ns (927%)      | `1,213`ns (1,011%)             | `899,281`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,302`ns (1,085%)    | `1,473`ns (1,228%)             | `768,049`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,352`ns (1,127%)    | `1,503`ns (1,253%)             | `739,645`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,655`ns (2,213%)    | `2,865`ns (2,388%)             | `376,648`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,471`ns (3,726%)    | `4,811`ns (4,009%)             | `223,664`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,767`ns (60,639%)  | `73,791`ns (61,492%)           | `13,742`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `892`ns (100%)        | `1,182`ns (133%)               | `1,121,076`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,287`ns (4,068%)   | `52,575`ns (5,894%)            | `27,558`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,311`ns (9,564%)   | `158,591`ns (17,779%)          | `11,722`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `151`ns (108%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (222%)        | `370`ns (264%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `411`ns (294%)        | `491`ns (351%)                 | `2,433,090`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (379%)        | `631`ns (451%)                 | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,273`ns (909%)      | `1,593`ns (1,138%)             | `785,546`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,379`ns (3,128%)    | `5,123`ns (3,659%)             | `228,363`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,927`ns (26,376%)  | `37,983`ns (27,131%)           | `27,080`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `150`ns (125%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (283%)        | `391`ns (326%)                 | `2,941,176`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `440`ns (367%)        | `521`ns (434%)                 | `2,272,727`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,382`ns (1,152%)    | `1,563`ns (1,303%)             | `723,589`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,864`ns (1,553%)    | `2,325`ns (1,938%)             | `536,481`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,723`ns (5,603%)    | `7,675`ns (6,396%)             | `148,743`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,935`ns (66,613%)  | `81,215`ns (67,679%)           | `12,510`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `541`ns (112%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `511`ns (106%)        | `561`ns (117%)                 | `1,956,947`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (125%)        | `671`ns (140%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `211`ns (100%)        | `231`ns (109%)                 | `4,739,336`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `511`ns (242%)        | `562`ns (266%)                 | `1,956,947`/sec       |

<!-- endblock(results) -->
