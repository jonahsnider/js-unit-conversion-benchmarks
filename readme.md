# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 13 Mar 2024 17:46:59 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az575-929 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (268%)        | `360`ns (300%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (401%)        | `541`ns (451%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (509%)        | `682`ns (568%)                 | `1,636,661`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,142`ns (952%)      | `1,242`ns (1,035%)             | `875,657`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,333`ns (1,111%)    | `1,532`ns (1,277%)             | `750,188`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,372`ns (1,143%)    | `1,523`ns (1,269%)             | `728,863`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,665`ns (2,221%)    | `2,867`ns (2,389%)             | `375,235`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,571`ns (3,809%)    | `5,031`ns (4,193%)             | `218,771`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,447`ns (60,373%)  | `73,343`ns (61,119%)           | `13,803`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `852`ns (100%)        | `1,192`ns (140%)               | `1,173,709`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,639`ns (4,300%)   | `52,671`ns (6,182%)            | `27,293`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,583`ns (9,810%)   | `155,903`ns (18,298%)          | `11,964`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `140`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `320`ns (246%)        | `351`ns (270%)                 | `3,125,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `411`ns (316%)        | `461`ns (355%)                 | `2,433,090`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (432%)        | `611`ns (470%)                 | `1,782,531`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,282`ns (986%)      | `1,392`ns (1,071%)             | `780,031`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,691`ns (3,608%)    | `4,911`ns (3,778%)             | `213,174`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,703`ns (28,233%)  | `37,471`ns (28,824%)           | `27,246`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `151`ns (116%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (262%)        | `411`ns (316%)                 | `2,941,176`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `411`ns (316%)        | `541`ns (416%)                 | `2,433,090`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,223`ns (941%)      | `1,533`ns (1,179%)             | `817,661`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,724`ns (1,326%)    | `2,335`ns (1,796%)             | `580,046`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,343`ns (4,879%)    | `7,835`ns (6,027%)             | `157,654`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `78,207`ns (60,159%)  | `80,255`ns (61,735%)           | `12,787`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `532`ns (111%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `530`ns (110%)        | `581`ns (121%)                 | `1,886,792`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `611`ns (127%)        | `681`ns (142%)                 | `1,636,661`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `240`ns (109%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `541`ns (246%)        | `601`ns (273%)                 | `1,848,429`/sec       |

<!-- endblock(results) -->
