# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 08 Aug 2026 19:08:51 GMT with Node.js v24.18.0 (V8 v13.6.233.17-node.50) on runnervmvrwv9 (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (225%)         | `90`ns (225%)                  | `11,111,111`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (250%)        | `100`ns (250%)                 | `10,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `170`ns (425%)        | `171`ns (428%)                 | `5,882,353`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `290`ns (725%)        | `291`ns (728%)                 | `3,448,276`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `410`ns (1,025%)      | `421`ns (1,053%)               | `2,439,024`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `490`ns (1,225%)      | `491`ns (1,228%)               | `2,040,816`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `891`ns (2,228%)      | `902`ns (2,255%)               | `1,122,334`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,362`ns (3,405%)    | `1,382`ns (3,455%)             | `734,214`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `280`ns (100%)        | `301`ns (108%)                 | `3,571,429`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `921`ns (329%)        | `992`ns (354%)                 | `1,085,776`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `16,687`ns (5,960%)   | `16,991`ns (6,068%)            | `59,927`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `91`ns (182%)         | `100`ns (200%)                 | `10,989,011`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `111`ns (222%)        | `120`ns (240%)                 | `9,009,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `170`ns (340%)        | `171`ns (342%)                 | `5,882,353`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `511`ns (1,022%)      | `511`ns (1,022%)               | `1,956,947`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,532`ns (3,064%)    | `1,572`ns (3,144%)             | `652,742`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `100`ns (250%)        | `100`ns (250%)                 | `10,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (250%)        | `101`ns (253%)                 | `10,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (303%)        | `130`ns (325%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `411`ns (1,028%)      | `421`ns (1,053%)               | `2,433,090`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,232`ns (3,080%)    | `1,242`ns (3,105%)             | `811,688`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,103`ns (5,258%)    | `2,135`ns (5,338%)             | `475,511`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `150`ns (100%)        | `151`ns (101%)                 | `6,666,667`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `190`ns (127%)        | `191`ns (127%)                 | `5,263,158`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `220`ns (147%)        | `221`ns (147%)                 | `4,545,455`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `70`ns (175%)         | `80`ns (200%)                  | `14,285,714`/sec      |

<!-- endblock(results) -->
