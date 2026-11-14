# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 14 Nov 2026 00:12:41 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervmwuk1x (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (250%)        | `110`ns (275%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (325%)        | `131`ns (328%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (325%)        | `140`ns (350%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `190`ns (475%)        | `191`ns (478%)                 | `5,263,158`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `311`ns (778%)        | `321`ns (803%)                 | `3,215,434`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `390`ns (975%)        | `400`ns (1,000%)               | `2,564,103`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `431`ns (1,078%)      | `461`ns (1,153%)               | `2,320,186`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `901`ns (2,253%)      | `981`ns (2,453%)               | `1,109,878`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,402`ns (3,505%)    | `1,452`ns (3,630%)             | `713,267`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (100%)        | `350`ns (106%)                 | `3,021,148`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `931`ns (281%)        | `1,011`ns (305%)               | `1,074,114`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `15,175`ns (4,585%)   | `15,447`ns (4,667%)            | `65,898`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (200%)        | `121`ns (202%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (217%)        | `130`ns (217%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `190`ns (317%)        | `200`ns (333%)                 | `5,263,158`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `401`ns (668%)        | `411`ns (685%)                 | `2,493,766`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,513`ns (2,522%)    | `1,563`ns (2,605%)             | `660,939`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (275%)        | `120`ns (300%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (278%)        | `121`ns (303%)                 | `9,009,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `410`ns (1,025%)      | `480`ns (1,200%)               | `2,439,024`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `962`ns (2,405%)      | `971`ns (2,428%)               | `1,039,501`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,175`ns (5,438%)    | `2,223`ns (5,558%)             | `459,770`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `180`ns (100%)        | `181`ns (101%)                 | `5,555,556`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `191`ns (106%)        | `200`ns (111%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `231`ns (128%)        | `250`ns (139%)                 | `4,329,004`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `80`ns (200%)         | `81`ns (203%)                  | `12,500,000`/sec      |

<!-- endblock(results) -->
