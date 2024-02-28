# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 28 Feb 2024 21:49:50 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az1498-798 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `141`ns (118%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (284%)        | `390`ns (325%)                 | `2,932,551`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `501`ns (418%)        | `561`ns (468%)                 | `1,996,008`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `642`ns (535%)        | `771`ns (643%)                 | `1,557,632`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,162`ns (968%)      | `1,312`ns (1,093%)             | `860,585`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,443`ns (1,203%)    | `1,844`ns (1,537%)             | `693,001`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,452`ns (1,210%)    | `1,753`ns (1,461%)             | `688,705`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,785`ns (2,321%)    | `3,127`ns (2,606%)             | `359,066`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,671`ns (3,892%)    | `5,703`ns (4,753%)             | `214,087`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,703`ns (60,586%)  | `74,111`ns (61,759%)           | `13,755`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `771`ns (100%)        | `962`ns (125%)                 | `1,297,017`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `30,927`ns (4,011%)   | `40,927`ns (5,308%)            | `32,334`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,391`ns (10,816%)  | `85,119`ns (11,040%)           | `11,992`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `290`ns (223%)        | `321`ns (247%)                 | `3,448,276`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `391`ns (301%)        | `441`ns (339%)                 | `2,557,545`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (401%)        | `571`ns (439%)                 | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,232`ns (948%)      | `1,322`ns (1,017%)             | `811,688`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,411`ns (3,393%)    | `4,599`ns (3,538%)             | `226,706`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,479`ns (28,061%)  | `36,959`ns (28,430%)           | `27,413`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `140`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `360`ns (277%)        | `391`ns (301%)                 | `2,777,778`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (347%)        | `511`ns (393%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,413`ns (1,087%)    | `1,523`ns (1,172%)             | `707,714`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,654`ns (1,272%)    | `1,824`ns (1,403%)             | `604,595`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,615`ns (5,088%)    | `7,043`ns (5,418%)             | `151,172`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,127`ns (61,636%)  | `80,639`ns (62,030%)           | `12,480`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `541`ns (112%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (108%)        | `572`ns (119%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (125%)        | `661`ns (137%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `221`ns (100%)        | `241`ns (109%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `541`ns (245%)        | `591`ns (267%)                 | `1,848,429`/sec       |

<!-- endblock(results) -->
