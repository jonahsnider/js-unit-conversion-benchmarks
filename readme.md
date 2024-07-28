# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 28 Jul 2024 15:06:30 GMT with Node.js v18.20.4 (V8 v10.2.154.26-node.37) on fv-az1109-54 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `100`ns (100%)        | `121`ns (121%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `270`ns (270%)        | `321`ns (321%)                 | `3,703,704`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `421`ns (421%)        | `520`ns (520%)                 | `2,375,297`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (501%)        | `591`ns (591%)                 | `1,996,008`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `962`ns (962%)        | `1,082`ns (1,082%)             | `1,039,501`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,152`ns (1,152%)    | `1,342`ns (1,342%)             | `868,056`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,293`ns (1,293%)    | `1,473`ns (1,473%)             | `773,395`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,535`ns (2,535%)    | `2,797`ns (2,797%)             | `394,477`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,271`ns (4,271%)    | `4,619`ns (4,619%)             | `234,137`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,743`ns (71,743%)  | `74,815`ns (74,815%)           | `13,939`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `772`ns (100%)        | `1,082`ns (140%)               | `1,295,337`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `34,079`ns (4,414%)   | `51,775`ns (6,707%)            | `29,344`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `86,335`ns (11,183%)  | `160,127`ns (20,742%)          | `11,583`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `160`ns (114%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `290`ns (207%)        | `321`ns (229%)                 | `3,448,276`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `440`ns (314%)        | `491`ns (351%)                 | `2,272,727`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `551`ns (394%)        | `601`ns (429%)                 | `1,814,882`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,193`ns (852%)      | `1,312`ns (937%)               | `838,223`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,431`ns (3,165%)    | `4,671`ns (3,336%)             | `225,683`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,727`ns (26,948%)  | `38,367`ns (27,405%)           | `26,506`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `111`ns (100%)        | `130`ns (117%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `360`ns (324%)        | `441`ns (397%)                 | `2,777,778`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `490`ns (441%)        | `581`ns (523%)                 | `2,040,816`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,342`ns (1,209%)    | `1,562`ns (1,407%)             | `745,156`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,643`ns (1,480%)    | `2,305`ns (2,077%)             | `608,643`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,395`ns (5,761%)    | `8,519`ns (7,675%)             | `156,372`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `82,367`ns (74,205%)  | `84,031`ns (75,704%)           | `12,141`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `461`ns (100%)        | `521`ns (113%)                 | `2,169,197`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `511`ns (111%)        | `561`ns (122%)                 | `1,956,947`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `591`ns (128%)        | `671`ns (146%)                 | `1,692,047`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `210`ns (100%)        | `230`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `501`ns (239%)        | `551`ns (262%)                 | `1,996,008`/sec       |

<!-- endblock(results) -->
