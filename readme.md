# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 12 Nov 2026 14:15:27 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervmwuk1x (Linux-x64 AMD EPYC 9V45 96-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `80`ns (200%)         | `110`ns (275%)                 | `12,500,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (250%)        | `100`ns (250%)                 | `10,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (275%)        | `110`ns (275%)                 | `9,090,909`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `160`ns (400%)        | `170`ns (425%)                 | `6,250,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `231`ns (578%)        | `240`ns (600%)                 | `4,329,004`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `301`ns (753%)        | `311`ns (778%)                 | `3,322,259`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `331`ns (828%)        | `341`ns (853%)                 | `3,021,148`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `651`ns (1,627%)      | `661`ns (1,652%)               | `1,536,098`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,162`ns (2,905%)    | `1,172`ns (2,930%)             | `860,585`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `210`ns (100%)        | `221`ns (105%)                 | `4,761,905`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `711`ns (339%)        | `791`ns (377%)                 | `1,406,470`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `11,327`ns (5,394%)   | `11,511`ns (5,481%)            | `88,285`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80`ns (160%)         | `90`ns (180%)                  | `12,500,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `80`ns (160%)         | `90`ns (180%)                  | `12,500,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (220%)        | `111`ns (222%)                 | `9,090,909`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `161`ns (322%)        | `180`ns (360%)                 | `6,211,180`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `320`ns (640%)        | `321`ns (642%)                 | `3,125,000`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,262`ns (2,524%)    | `1,282`ns (2,564%)             | `792,393`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `90`ns (225%)         | `90`ns (225%)                  | `11,111,111`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (250%)        | `100`ns (250%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (275%)        | `110`ns (275%)                 | `9,090,909`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `310`ns (775%)        | `321`ns (803%)                 | `3,225,806`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `701`ns (1,752%)      | `711`ns (1,777%)               | `1,426,534`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,723`ns (4,308%)    | `1,742`ns (4,355%)             | `580,383`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `131`ns (100%)        | `141`ns (108%)                 | `7,633,588`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `160`ns (122%)        | `161`ns (123%)                 | `6,250,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `190`ns (145%)        | `200`ns (153%)                 | `5,263,158`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `60`ns (150%)         | `70`ns (175%)                  | `16,666,667`/sec      |

<!-- endblock(results) -->
