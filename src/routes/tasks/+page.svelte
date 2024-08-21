<script>
</script>

<div class="overflow-x-auto">
    <div class="task-board">
        <!-- TO DO Column -->
        <div class="task-column">
            <div class="column-title">
                <h3 class="badge-neutral"><i class="fas fa-circle"></i> TO DO</h3>
            </div>
            <div class="task-card">
                <h4 class="task-title">Create a report for the Month of May</h4>
                <p class="task-info"><i class="fas fa-user"></i> Elijah, Triumph, Destiny</p>
                <p class="task-info"><i class="fas fa-calendar-alt"></i> Today - Tue 2:00 pm</p>
                <p class="task-info"><i class="fas fa-flag"></i> High</p>
                <p class="task-info"><i class="fas fa-tasks"></i> 4 Subtasks</p>
            </div>
            <div class="task-card">
                <h4 class="task-title">Generate study report</h4>
                <p class="task-info"><i class="fas fa-user"></i> You, Joy</p>
                <p class="task-info"><i class="fas fa-calendar-alt"></i> Tue 2:00 pm - Friday</p>
                <p class="task-info"><i class="fas fa-flag"></i> Low</p>
                <p class="task-info"><i class="fas fa-tasks"></i> 2 Subtasks</p>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
	.task-board {
		display: grid;
		grid-template-columns: repeat(auto-fit, 300px);
		gap: var(--value-4);
        padding: 0 var(--value-2);

		.task-column {
			background-color: var(--color-black-fg);
			padding: var(--value-2);
			border-radius: var(--value-2);
            outline: 1px solid var(--color-light-main);

            display: grid;
            row-gap: var(--value-2);

			.column-title {
				margin-bottom: var(--value-0);
			}

			.task-card {
				background-color: var(--color-white-main);
				color: var(--color-grey-main);
				padding: var(--value-4);
				border-radius: var(--value-2);
				// margin-bottom: var(--value-4);

				.task-title {
					color: var(--color-black-main);
					font-size: var(--value-5);
					font-weight: 500;
					margin-bottom: var(--value-2);
				}

				.task-info {
					font-size: var(--value-4);
					margin-bottom: var(--value-1);
					display: flex;
					align-items: center;

					i {
						margin-right: var(--value-2);
					}
				}
			}
		}
	}
</style>
