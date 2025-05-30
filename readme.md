# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 30 May 2025 09:42:52 GMT with Node.js v22.16.0 (V8 v12.4.254.21-node.26) on fv-az1344-523 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (250%)        | `160`ns (267%)                 | `6,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `170`ns (283%)        | `170`ns (283%)                 | `5,882,353`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `291`ns (485%)        | `301`ns (502%)                 | `3,436,426`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `451`ns (752%)        | `461`ns (768%)                 | `2,217,295`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `561`ns (935%)        | `572`ns (953%)                 | `1,782,531`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `652`ns (1,087%)      | `671`ns (1,118%)               | `1,533,742`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,302`ns (2,170%)    | `1,322`ns (2,203%)             | `768,049`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,415`ns (4,025%)    | `2,445`ns (4,075%)             | `414,079`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `862`ns (100%)        | `972`ns (113%)                 | `1,160,093`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,453`ns (169%)      | `1,583`ns (184%)               | `688,231`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `30,671`ns (3,558%)   | `32,751`ns (3,799%)            | `32,604`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `71`ns (101%)                  | `14,285,714`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (186%)        | `131`ns (187%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (214%)        | `151`ns (216%)                 | `6,666,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (229%)        | `161`ns (230%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `251`ns (359%)        | `261`ns (373%)                 | `3,984,064`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `551`ns (787%)        | `561`ns (801%)                 | `1,814,882`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,495`ns (3,564%)    | `2,515`ns (3,593%)             | `400,802`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `131`ns (218%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (233%)        | `150`ns (250%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `161`ns (268%)        | `171`ns (285%)                 | `6,211,180`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `601`ns (1,002%)      | `621`ns (1,035%)               | `1,663,894`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,433`ns (2,388%)    | `1,473`ns (2,455%)             | `697,837`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,417`ns (5,695%)    | `3,457`ns (5,762%)             | `292,654`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `230`ns (100%)        | `240`ns (104%)                 | `4,347,826`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `261`ns (113%)        | `270`ns (117%)                 | `3,831,418`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `320`ns (139%)        | `321`ns (140%)                 | `3,125,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `60`ns (100%)         | `71`ns (118%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `120`ns (200%)        | `170`ns (283%)                 | `8,333,333`/sec       |

<!-- endblock(results) -->
