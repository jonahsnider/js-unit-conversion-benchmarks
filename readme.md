# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 27 Mar 2024 10:17:50 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az891-837 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `131`ns (109%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (268%)        | `361`ns (301%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `501`ns (418%)        | `571`ns (476%)                 | `1,996,008`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `621`ns (518%)        | `692`ns (577%)                 | `1,610,306`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,132`ns (943%)      | `1,222`ns (1,018%)             | `883,392`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,422`ns (1,185%)    | `1,583`ns (1,319%)             | `703,235`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,432`ns (1,193%)    | `1,543`ns (1,286%)             | `698,324`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,695`ns (2,246%)    | `2,885`ns (2,404%)             | `371,058`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,719`ns (3,933%)    | `5,051`ns (4,209%)             | `211,909`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,487`ns (59,573%)  | `72,063`ns (60,053%)           | `13,989`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `902`ns (100%)        | `1,142`ns (127%)               | `1,108,647`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `33,375`ns (3,700%)   | `41,823`ns (4,637%)            | `29,963`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,519`ns (9,259%)   | `87,935`ns (9,749%)            | `11,973`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `281`ns (216%)        | `341`ns (262%)                 | `3,558,719`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (347%)        | `531`ns (408%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `551`ns (424%)        | `651`ns (501%)                 | `1,814,882`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,282`ns (986%)      | `1,542`ns (1,186%)             | `780,031`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,439`ns (3,415%)    | `5,059`ns (3,892%)             | `225,276`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,447`ns (28,036%)  | `37,279`ns (28,676%)           | `27,437`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (270%)        | `391`ns (301%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `431`ns (332%)        | `511`ns (393%)                 | `2,320,186`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,432`ns (1,102%)    | `1,553`ns (1,195%)             | `698,324`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,823`ns (1,402%)    | `2,055`ns (1,581%)             | `548,546`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,715`ns (5,165%)    | `7,307`ns (5,621%)             | `148,920`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,359`ns (61,045%)  | `79,999`ns (61,538%)           | `12,601`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `541`ns (110%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `531`ns (108%)        | `581`ns (118%)                 | `1,883,239`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (122%)        | `671`ns (137%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `240`ns (109%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (241%)        | `581`ns (264%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
