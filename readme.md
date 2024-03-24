# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 24 Mar 2024 09:33:49 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az1542-632 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `290`ns (264%)        | `321`ns (292%)                 | `3,448,276`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (401%)        | `511`ns (465%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `581`ns (528%)        | `631`ns (574%)                 | `1,721,170`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,072`ns (975%)      | `1,162`ns (1,056%)             | `932,836`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,272`ns (1,156%)    | `1,393`ns (1,266%)             | `786,164`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,383`ns (1,257%)    | `1,483`ns (1,348%)             | `723,066`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,505`ns (2,277%)    | `2,645`ns (2,405%)             | `399,202`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,531`ns (4,119%)    | `4,751`ns (4,319%)             | `220,702`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,871`ns (65,337%)  | `72,639`ns (66,035%)           | `13,914`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `901`ns (100%)        | `1,212`ns (135%)               | `1,109,878`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,959`ns (4,102%)   | `53,119`ns (5,896%)            | `27,057`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,647`ns (9,284%)   | `156,543`ns (17,374%)          | `11,955`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `160`ns (114%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (251%)        | `430`ns (307%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `521`ns (372%)        | `651`ns (465%)                 | `1,919,386`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `581`ns (415%)        | `711`ns (508%)                 | `1,721,170`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,393`ns (995%)      | `1,803`ns (1,288%)             | `717,875`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,659`ns (3,328%)    | `5,631`ns (4,022%)             | `214,638`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,831`ns (26,308%)  | `38,175`ns (27,268%)           | `27,151`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (251%)        | `341`ns (284%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `431`ns (359%)        | `511`ns (426%)                 | `2,320,186`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,353`ns (1,128%)    | `1,493`ns (1,244%)             | `739,098`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,783`ns (1,486%)    | `2,003`ns (1,669%)             | `560,852`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,443`ns (5,369%)    | `7,135`ns (5,946%)             | `155,207`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,231`ns (66,026%)  | `80,063`ns (66,719%)           | `12,621`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `521`ns (111%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `501`ns (106%)        | `550`ns (117%)                 | `1,996,008`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `571`ns (121%)        | `631`ns (134%)                 | `1,751,313`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `211`ns (100%)        | `231`ns (109%)                 | `4,739,336`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (247%)        | `571`ns (271%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
