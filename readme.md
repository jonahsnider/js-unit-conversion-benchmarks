# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 22 Nov 2023 07:25:37 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az1152-391 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `112`ns (100%)        | `191`ns (171%)                 | `8,928,571`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `210`ns (188%)        | `391`ns (349%)                 | `4,761,905`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `320`ns (286%)        | `561`ns (501%)                 | `3,125,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `342`ns (305%)        | `672`ns (600%)                 | `2,923,977`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `500`ns (446%)        | `1,054`ns (941%)               | `2,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `682`ns (609%)        | `1,383`ns (1,235%)             | `1,466,276`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `692`ns (618%)        | `1,502`ns (1,341%)             | `1,445,087`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,303`ns (1,163%)    | `2,765`ns (2,469%)             | `767,460`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,587`ns (2,310%)    | `4,863`ns (4,342%)             | `386,548`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,611`ns (4,117%)    | `9,551`ns (8,528%)             | `216,873`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `752`ns (100%)        | `822`ns (109%)                 | `1,329,787`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,695`ns (4,215%)   | `38,591`ns (5,132%)            | `31,551`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,615`ns (5,268%)   | `40,319`ns (5,362%)            | `25,243`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `220`ns (110%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `362`ns (181%)        | `412`ns (206%)                 | `2,762,431`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `522`ns (261%)        | `590`ns (295%)                 | `1,915,709`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (306%)        | `681`ns (341%)                 | `1,636,661`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,203`ns (602%)      | `1,314`ns (657%)               | `831,255`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,283`ns (642%)      | `1,443`ns (722%)               | `779,423`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,631`ns (2,316%)    | `5,059`ns (2,530%)             | `215,936`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `381`ns (190%)        | `422`ns (210%)                 | `2,624,672`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (229%)        | `512`ns (255%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,293`ns (643%)      | `1,423`ns (708%)               | `773,395`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,623`ns (807%)      | `1,823`ns (907%)               | `616,143`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,943`ns (2,957%)    | `6,135`ns (3,052%)             | `168,265`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,535`ns (3,251%)    | `6,963`ns (3,464%)             | `153,022`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `562`ns (100%)        | `632`ns (112%)                 | `1,779,359`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `602`ns (107%)        | `661`ns (118%)                 | `1,661,130`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `682`ns (121%)        | `763`ns (136%)                 | `1,466,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `292`ns (100%)        | `321`ns (110%)                 | `3,424,658`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (182%)        | `591`ns (202%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
